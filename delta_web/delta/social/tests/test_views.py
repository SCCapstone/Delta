from .test_setup import TestSetUp

class TestViews(TestSetUp):
    def test_user_make_review_with_no_data(self):
        res = self.client.post(self.reviews_url)
        self.assertEqual(res.status_code, 400)