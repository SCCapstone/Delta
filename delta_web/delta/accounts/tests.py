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
        
    def test_registerUserWithOrganization(self):
        data = {
            'name':'testcase',
            'following_user_count':1,
            'description':'testPassword',
            'password':'somestupid',
        }
        self.client.post('/api/organization/',data)
        
        dataUser = {
            'username':'testcase',
            'first_name':'testFirstName',
            'last_name':'testLastName',
            'password':'testPassword',
            'email':'testcase@gmail.com',
        }
        response = self.client.post('/api/auth/register',dataUser)

        # 200 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_200_OK)