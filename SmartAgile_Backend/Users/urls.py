from django.urls import path
from .views import (
    UsersView , 
    UserEditUpdateDeleteView, 
    SuperuserCreate , 
    LoginView,
    UserProfileCreate, 
    SuperuserViewEditDelete,
    UserProfileListFilter,
    position_choices,
    UserProfileView
    )
from .forgot_password_views import PasswordResetRequestView, PasswordResetConfirmOtpView, PasswordResetConfirmView


from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('employees/', UsersView.as_view(), name='Users'),
    path('employees/<int:id>/' ,UserEditUpdateDeleteView.as_view() , name="User Edits" ),
    path('login/', LoginView.as_view(), name='login'),
    path('employees/superuser/',SuperuserCreate.as_view(),name='superuser-create'),
    path('employees/superuser/<int:id>/', SuperuserViewEditDelete.as_view() , name="SuperUserViewEditDelete"),
    

    path('employee/profile/<int:org_id>/' , UserProfileCreate.as_view() , name="User-Profile"),
    path('employee/profile/position/<int:org_id>/<str:position>/', UserProfileCreate.as_view() , name="User-Profile with Positions"),
    path('employees/profile/',UserProfileCreate.as_view(), name='new-user-profile'),
    path('employees/profile/<int:id>/',UserProfileCreate.as_view(), name='new-user-profile'),
    path('employee/profile/username/' , UserProfileListFilter.as_view() , name="User Filter"),
    path('employee/profile/<int:org_id>/<int:id>/' , UserProfileCreate.as_view() , name="User-Profile Create id"),

    path('employee/profile/user-details/<int:id>/', UserProfileView.as_view(), name='user_profile_details'),

    path('auth/password_reset/', PasswordResetRequestView.as_view(), name='password-reset-request'),
    path('auth/password_reset/confirm/otp/<int:pk>/<str:token>/', PasswordResetConfirmOtpView.as_view(), name='password-reset-otp'),
    path('auth/password_reset/confirm/password/<int:pk>/<str:code>/', PasswordResetConfirmView.as_view(), name='password-reset-confirm'),
    
    path('employee/position-choices/' ,position_choices , name="Employee Position" ),

    path('token/', MyTokenObtainPairView.as_view(), name='token-obtain-pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh-view'),
]
