import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import NoticeDetailsItem from './NoticeDetailsItem'
import Icon from '@/assets/img/icons'
import { getValue } from '@/views/notices/View_Notices/dataTable/DataTable_Notices'

const Children = ({ isAcceptedChild }) => {
  const { t } = useTranslation()

  return (
    <NoticeDetailsItem
      label={t('common.dzieci')}
      icon={<Icon.MdChildFriendly />}
      value={getValue(isAcceptedChild)}
    />
  )
}

export default memo(Children)
