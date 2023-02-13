from django.urls import path

from tag.views import TagView, TagListView

urlpatterns = [
    path('', TagListView.as_view()),
    path("<int:tag_id>/", TagView.as_view()),
]
