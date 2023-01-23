from rest_framework.test import APITestCase
from django.urls import reverse

class TestSetUp(APITestCase):
    
    def setUp(self):
        self.reviews_url = reverse('Reviews')
        self.NotifReviews_url = reverse('NotificationReviews')

        review_data_InvalidRatingLower={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"-1"
        }

        review_data_InvalidRatingUpper={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"6"
        }

        review_data_ValidRating={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"4"
        }

        review_data_BlankTitle={
            'title':"",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"6"
        }
        return super().setUp()

    def tearDown():

        return super().tearDown()