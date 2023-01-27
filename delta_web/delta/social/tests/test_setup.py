from rest_framework.test import APITestCase
from django.urls import reverse

class TestSetUp(APITestCase):
    
    def setUp(self):
        self.reviews_url = reverse('Reviews-list')
        self.NotifReviews_url = reverse('NotificationReviews-list')

        self.review_data_InvalidRatingLower={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"-1"
        }

        self.review_data_InvalidRatingUpper={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"6"
        }

        self.review_data_ValidRating={
            'title':"Test",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"4"
        }

        self.review_data_BlankTitle={
            'title':"",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"4"
        }

        self.review_data_InvalidTitle={
            'title':" This is a sentence that is 101 characters long, it has to be exactly 101 characters to meet the requirement. 101 ",
            'author':"nav",
            'file':"words.txt",
            'text':"The Description",
            'active':"True",
            'rating':"4"
        }

        return super().setUp()

    def tearDown(self):

        return super().tearDown()