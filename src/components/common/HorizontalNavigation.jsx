import { useState } from 'react'
import { horizontalNavigationConfig } from '@/app/config/navigationConfig'
import { route } from '@/app/router/urls/routes'
import { useAuth } from '../../app/hooks/useAuth'
import UserDropdown from './UserDropdown'

import NavItem from './NavItem'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

const HorizontalNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAuthenticated, roles } = useAuth()
  const {t} = useTranslation();
  return (
    <>
      <nav
        className={`main-nav ml-auto flex gap-4 lg:gap-8 items-center px-4 ${
          isMenuOpen ? 'active' : ''
        }`}>
        {horizontalNavigationConfig(t)
          .filter(
            (item) =>
              item?.permissions === undefined ||
              item?.permissions.some((permission) => roles.includes(permission)),
          )
          .map((item) => (
            <NavItem key={item.id} to={item.route} label={item.label} icon={item.icon} />
          ))}
        {/*<UserDropdown />*/}
        <LanguageSwitcher/>
      </nav>
    </>
  )
}

export default HorizontalNavigation
