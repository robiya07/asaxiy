from __future__ import print_function
import os
import clicksend_client


# Configure HTTP basic authorization: BasicAuth
configuration = clicksend_client.Configuration()
configuration.username = 'obidjonova07@mail.ru'
configuration.password = 'A21959E3-0763-90A1-D053-CA02264C32EB'

# create an instance of the API class
api_instance = clicksend_client.SMSApi(clicksend_client.ApiClient(configuration))