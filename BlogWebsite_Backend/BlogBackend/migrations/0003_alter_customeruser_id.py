# Generated by Django 5.0.2 on 2024-02-10 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BlogBackend', '0002_customeruser_id_alter_customeruser_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customeruser',
            name='id',
            field=models.IntegerField(default=1, primary_key=True, serialize=False),
        ),
    ]
