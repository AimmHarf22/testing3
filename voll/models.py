from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    def __str__(self):
        return f"{self.id}: User: {self.username}, Password: {self.password}"


class Feedback(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="userFeedback"
    )
    text = models.TextField(max_length=100000, default=None, null=True)
