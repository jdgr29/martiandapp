import { Button, notification } from 'antd';
import React from 'react';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const openNotification = (message: string, description: string) => {
  notification.open({
    message,
    description,
    onClick: () => {},
  });
};


export const openNotificationWithIcon = (message: string, description: string, type: NotificationType) => {
    notification[type]({
      message,
      description,
      onClick: () => {},
    });
};

export default {openNotification, openNotificationWithIcon}