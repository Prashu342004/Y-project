import django.db.models.deletion
from django.db import migrations, models

class Migration(migrations.Migration):
    initial = True
    dependencies = []
    operations = [
        migrations.CreateModel(name='Match', fields=[
            ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ('club_name', models.CharField(max_length=100)),
            ('time_date', models.DateTimeField()),
            ('location', models.CharField(max_length=200)),
        ]),
        migrations.CreateModel(name='Player', fields=[
            ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ('photo', models.URLField(blank=True)),
            ('name', models.CharField(max_length=100)),
            ('position', models.CharField(max_length=50)),
            ('jersey_no', models.IntegerField()),
            ('mobile_no', models.CharField(blank=True, max_length=20)),
            ('email', models.EmailField(blank=True, max_length=254)),
        ]),
        migrations.CreateModel(name='Attendance', fields=[
            ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ('percentage', models.DecimalField(decimal_places=2, max_digits=5)),
            ('date_present', models.JSONField(default=list)),
            ('date_absent', models.JSONField(default=list)),
            ('fee_status', models.CharField(max_length=50)),
            ('player', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='api.player')),
        ]),
    ]
