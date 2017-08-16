from Acquisition import aq_inner
from Products.Five import BrowserView
from datetime import date
from DateTime import DateTime
import time


def check_stock():
    import plone.api
    from repoze.catalog.query import Eq
    from datetime import datetime
    from bda.plone.orders.common import get_bookings_soup, get_orders_soup
    from bda.plone.cart import get_item_stock

    today = datetime.now().date()

    with plone.api.env.adopt_user(username="admin"):
        container_path = "/nl/events/week"
        container = plone.api.content.get(path=container_path)
        results = plone.api.content.find(context=container, portal_type="Ticket Occurrence")
        soup = get_bookings_soup(container)
        orders_soup = get_orders_soup(container)

        occs = [r for r in results if datetime.strptime(r.getId, '%Y-%m-%d').date() > today]

        for occ in occs:
            buyable_uid = occ.UID
            stock_available_item = get_item_stock(occ.getObject()).available

            bookings = soup.query(Eq('buyable_uid', buyable_uid))

            list_bookings = []
            total_sold = 0
            for booking in bookings:
                count = booking.attrs.get('buyable_count', 0)
                if booking.attrs.get('state', None):
                    if booking.attrs.get('state', None) != 'cancelled' and booking.attrs.get('salaried', '') == 'yes':
                        total_sold += count
                        list_bookings.append(booking)

            available_stock = 20 - total_sold

            if total_sold == 0 and stock_available_item != 20:
                print "----"
                print "Need to change stock: %s" %(occ.getURL())
                print "----"

            if available_stock != stock_available_item:
                print "----"
                print "Timeslot: %s" %(occ.getURL())
                print "Available stock: %s" %(stock_available_item)
                print "Total of items sold: %s" %(total_sold)
                print "Real available stock should be: %s" %(available_stock)
                print "----"
            else:
                if available_stock < 20:
                    print available_stock, stock_available_item

        return True
    return True


class ContextToolsView(BrowserView):

    def isEventPast(self, event):
        """ Checks if the event is already past """
        if event.portal_type != 'Event':
            return False
        else:
            try:
                t = DateTime(time.time())
                if event.end is not None:
                    end = DateTime(event.end)
                    return end.year() < t.year() or (end.year() == t.year() and end.month() < t.month()) or(end.year() == t.year() and end.month() == t.month() and end.day() < t.day())
                else:
                    start = DateTime(event.start)
                    return start.year() < t.year() or (start.year() == t.year() and start.month() < t.month()) or(start.year() == t.year() and start.month() == t.month() and start.day() < t.day())
            except:
                return False
        return True

class OnlineExperienceView(BrowserView):

    def getSlideshowItems(self):
        context = self.context
        inc = 2
        nthchild = 1

        inline_css = ""
        template = ".cd-fixed-bg:nth-child(%s) { background-image: url('%s');}"

        if 'slideshow' in context:
            slideshow = context['slideshow']
            for _id in slideshow:
                obj = slideshow[_id]
                if obj:
                    portal_type = getattr(obj, 'portal_type', None)
                    if portal_type == "Image":
                            url = obj.absolute_url()+"/@@images/image/large"
                            new_image = template % (nthchild, url)
                            inline_css += new_image
                            nthchild += inc

        final_inline_css = "<style>" + inline_css + "</style>"
        return final_inline_css

