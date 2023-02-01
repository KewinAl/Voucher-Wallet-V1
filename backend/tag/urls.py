from django.urls import path

from tag.views import ListTagView

urlpatterns = [
    path("tags/", ListTagView.as_view()),
]
