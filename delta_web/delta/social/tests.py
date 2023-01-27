from django.test import TestCase

from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status
from accounts.serializers import UserSerializer

# Create your tests here.

User = get_user_model()

class ReviewTestCase(APITestCase):

  def test_review_invalid_rating(self):

    # login a user
    loginData = {
      'username': 'test',
      'password': 'test'
    }
    self.client.post('/api/auth/login', loginData, format='json')

    # data needed for a review post
    data = {
      'title': 'testTitle',
      'text': 'testText',
      'rating': -1,
      'file': 1,
      'author': 'test' # may need to change to an int value
    }
    response = self.client.post('/api/review',data)

    # should return bad request
    self.assertFalse(response.status_code,status.HTTP_200_OK)