from django.test import TestCase

from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase
from rest_framework import status

# Create your tests here.
class TestCase(APITestCase):
    
    def test_createOrganization(self):
        # all data needed to create new user instance
        data = {
            'name':'testcase',
            'following_user_count':1,
            'description':'testPassword',
            'password':'somestupid',
        }
        response = self.client.post('/api/organization/',data)

        # 201 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
    
    def test_createOrganizationNoName(self):
        # all data needed to create new user instance
        data = {
            'name':'',
            'following_user_count':1,
            'description':'testPassword',
            'password':'somestupid',
        }
        response = self.client.post('/api/organization/',data)

        # 201 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_400_BAD_REQUEST)
        
    def test_createOrganizationNoDescription(self):
        # all data needed to create new user instance
        data = {
            'name':'testcase2',
            'following_user_count':1,
            'description':'',
            'password':'somestupid',
        }
        response = self.client.post('/api/organization/',data)

        # 201 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        
    def test_createOrganization(self):
        # all data needed to create new user instance
        data = {
            'name':'testcase',
            'following_user_count':-1,
            'description':'testPassword',
            'password':'somestupid',
        }
        response = self.client.post('/api/organization/',data)

        # 201 is success response code
        # Note it destroys the test database afterwards
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)