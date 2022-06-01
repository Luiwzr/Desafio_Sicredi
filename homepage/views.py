from django.shortcuts import render
from django.views import generic
from django.template import loader

from django.http import HttpResponse

# Create your views here.
# class HomepageView(generic.TemplateView):
  
#     template_name = 'homepage/index.html'

#     # def get_queryset(self):
#     #     """Return the last five published questions"""
#     #     return []

def index(request):
    return render(request, 'homepage/index.html', {})