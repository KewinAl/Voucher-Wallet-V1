from django.urls import path

from users.views import RetrieveUserView, ListUsersView, SearchUsersView

urlpatterns = [
    path('', SearchUsersView.as_view()),
    path('<int:user_id>/', RetrieveUserView.as_view()),
    path('list/', ListUsersView.as_view()),
]
