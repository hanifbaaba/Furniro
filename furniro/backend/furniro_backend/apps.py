from django.apps import AppConfig


class FurniroBackendConfig(AppConfig):
    default_auto_field = 'django_mongodb_backend.fields.ObjectIdAutoField'
    name = 'furniro_backend'
