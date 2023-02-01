from rest_framework.generics import RetrieveUpdateDestroyAPIView
from customerProfile.models import CustomerProfile
from customerProfile.serializers import CustomerProfileSerializer


class CustomerProfileView(RetrieveUpdateDestroyAPIView):
    queryset = CustomerProfile.objects.all()
    serializer_class = CustomerProfileSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'customer_id'  # field in the request
    http_method_names = ['get', 'post', 'put', 'delete']
