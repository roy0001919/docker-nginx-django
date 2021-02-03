"""
WSGI config for 202102_activity_web_olddd project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os
from django.conf import settings
from django.contrib.staticfiles.handlers import StaticFilesHandler
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', '202102_activity_web.settings')
if settings.DEBUG:
    application = StaticFilesHandler(get_wsgi_application())
else:
    application = get_wsgi_application()
