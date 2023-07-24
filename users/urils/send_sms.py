import random
from django.core.cache import cache

import clicksend_client
from clicksend_client import SmsMessage
from clicksend_client.rest import ApiException
from root.clicksend_settings import api_instance


def setKey(key, value, timeout=None):
    return cache.set(key, value, timeout=timeout)


def send_messag_phone(phone_number):
    # If you want to explictly set from, add the key _from to the message.
    PIN = random.randint(100000, 999999)
    # setKey(phone_number, PIN, timeout=60*100)
    body_message = f"Welcome to Olcha.uz," \
                   f" for your first login." \
                   f" You'll need the activation PIN:{PIN}"
    sms_message = SmsMessage(source="php",
                             body=body_message,
                             to="+998" + str(phone_number),
                             )
    sms_messages = clicksend_client.SmsMessageCollection(messages=[sms_message])
    try:
        # Send sms message(s)
        api_response = api_instance.sms_send_post(sms_messages)
        print(api_response)
        return PIN
    except ApiException as e:
        return "Exception when calling SMSApi->sms_send_post: %s\n" % e


send_messag_phone('932132277')
