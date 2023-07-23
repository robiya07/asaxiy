# forms.py
from django import forms

from big_products.models import BigProductModel


class BigProductModelForm(forms.ModelForm):
    class Meta:
        model = BigProductModel
        fields = '__all__'

    def clean(self):
        cleaned_data = super().clean()
        book = cleaned_data.get('book')
        prod = cleaned_data.get('prod')

        if book and prod:
            raise forms.ValidationError("You can choose either a book or a product")
        elif not book and not prod:
            raise forms.ValidationError("You can choose either a book or a product")

        return cleaned_data
