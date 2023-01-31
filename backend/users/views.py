from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from users.serializers import UserSerializer

User = get_user_model()


class LoggedInUserView(RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['get', 'patch', 'delete']  # disallow put as we don't use it

    def get_object(self):
        return self.request.user


class RetrieveUserView(RetrieveAPIView):
    """
        get: Retrieves a specific User by ID and displays all the information about that User
    """
    lookup_field = 'id'
    lookup_url_kwarg = 'user_id'
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]


class ListUsersView(ListAPIView):
    """
    get: Lists all users.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]


class SearchUsersView(ListAPIView):
    """
    get: Search among all users.
    """
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        query = self.request.GET.get('search', '')  # '' the default value
        if query == '':
            return []
        return User.objects.filter(Q(username__contains=query))
