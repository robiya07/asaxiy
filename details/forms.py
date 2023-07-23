# forms.py
from django import forms

from details.models import DiscountModel


class DiscountModelForm(forms.ModelForm):
    class Meta:
        model = DiscountModel
        fields = '__all__'

    def clean(self):
        cleaned_data = super().clean()
        prod = cleaned_data.get('product')
        price = cleaned_data.get('price')

        if prod and prod.price <= price:
            raise forms.ValidationError("The discount price is too high")

        return cleaned_data
