import { translate } from '@/i18n/index.js'

// 枚举值，用于逻辑判断
export const EventEnum = {
  // ssl证书到期 默认
  SSL_CERT_EXPIRE: 0,

  // 域名到期
  DOMAIN_EXPIRE: 1,
  
  // 网站监控异常
  MONITOR_EXCEPTION: 2,

  // 托管证书到期
  SSL_CERT_FILE_EXPIRE: 3,

   // 监控异常恢复
   MONITOR_EXCEPTION_RESTORE: 4,
}

export const EventOptions = [
  {
    value: EventEnum.SSL_CERT_EXPIRE,
    label: translate('SSL证书到期'),
  },
  {
    value: EventEnum.DOMAIN_EXPIRE,
    label: translate('域名到期'),
  },
  {
    value: EventEnum.SSL_CERT_FILE_EXPIRE,
    label: translate('托管证书到期'),
  },
  {
    value: EventEnum.MONITOR_EXCEPTION,
    label: translate('网站监控异常'),
  },
  {
    value: EventEnum.MONITOR_EXCEPTION_RESTORE,
    label: translate('监控异常恢复'),
  },
  
]

export function eventFilter(value) {
  const item = EventOptions.find((item) => item.value == value)
  if (item) {
    return item.label
  }
}
