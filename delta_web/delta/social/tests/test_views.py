from .test_setup import TestSetUp

class TestViews(TestSetUp):
    
    def test_user_make_review_with_no_data(self):
        res = self.client.post(self.reviews_url)
        self.assertEqual(res.status_code, 400)

    def test_make_review_invalid_rating_lower(self):
        res = self.client.post(self.reviews_url, self.review_data_InvalidRatingLower, format="json")
        self.assertEqual(res.status_code, 400)
   