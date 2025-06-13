from django.db import models


class Users(models.Model):
    id_user = models.AutoField(primary_key=True)
    nick = models.CharField(max_length=20)
    first_name_user = models.CharField(max_length=20)
    surname_user = models.CharField(max_length=35)
    password = models.CharField(max_length=40)
    email = models.CharField(max_length=50)
    avatar = models.BinaryField()
    ADMIN = 'admin'
    NOADMIN = 'noadmin'
    TYPEOF_CHOICES = [
        (ADMIN, 'Admin'),
        (NOADMIN, 'No Admin'),
    ]
    typeof = models.CharField(max_length=10, choices=TYPEOF_CHOICES)

    class Meta:
        managed = False
        db_table = 'users'


class Groups(models.Model):
    id_group = models.AutoField(primary_key=True)
    group_nom = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'groups'


class InGroup(models.Model):
    id_user = models.ForeignKey(Users, models.DO_NOTHING, db_column='id_user')
    id_group = models.ForeignKey(Groups, models.DO_NOTHING, db_column='id_group')

    class Meta:
        managed = False
        db_table = 'in_group'
