from django.test import TestCase

from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status
from accounts.serializers import UserSerializer

# Create your tests here.
User = get_user_model()

class RegistrationTestCase(APITestCase):

    def test_registration(self):
        # all data needed to create new user instance
        data = {
            'username':'testcase',
            'first_name':'testFirstName',
            'last_name':'testLastName',
            'password':'testPassword',
            'email':'testcase@gmail.com',
        }
        response = self.client.post('/api/auth/register',data)

        # 200 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_200_OK)

# Vince
# passes test, but do this with a debugger and i'm not sure
# Following this SO post: https://stackoverflow.com/questions/22457557/how-to-test-login-process
class LoginTestCase(APITestCase):

    def test_login(self):

        url = '/api/auth/login'
        data = {
            'username': 'test',
            'password': 'test'
        }
        response = self.client.post(url, data, format='json')
        # import pdb
        # pdb.set_trace()
        self.assertTrue(response.status_code, status.HTTP_200_OK)