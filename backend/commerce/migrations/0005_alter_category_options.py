# Generated by Django 4.2.1 on 2023-05-12 01:13

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("commerce", "0004_category_slug"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="category",
            options={"verbose_name": "category", "verbose_name_plural": "categories"},
        ),
    ]
