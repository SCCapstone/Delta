from rest_framework import routers
from .api import ViewsetDataAccel

router = routers.DefaultRouter()
router.register('api/accel',ViewsetDataAccel,'DataAccels')

urlpatterns = router.urls