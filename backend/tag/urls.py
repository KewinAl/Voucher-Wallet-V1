from django.urls import path

from tag.views import TagView

urlpatterns = [
    path("<int:tag_id>/", TagView.as_view()),
]
