import { useState } from 'react';
import {
  Chat,
  ChatActive,
  MyHome,
  MyHomeActive,
  MyPage,
  MyPageActive,
  MyPill,
  MyPillActive,
} from '../../assets';
import { cx } from '../util';
import * as styles from './bottom-navigation.css';

export type MenuItem = 'home' | 'pill' | 'consultation' | 'mypage';

interface BottomNavigationProps {
  selected?: MenuItem | null;
  onSelect?: (id: MenuItem) => void;
}

const renderIcon = (id: MenuItem, isActive: boolean) => {
  const icons = {
    home: isActive ? MyHomeActive : MyHome,
    pill: isActive ? MyPillActive : MyPill,
    consultation: isActive ? ChatActive : Chat,
    mypage: isActive ? MyPageActive : MyPage,
  };

  const IconComponent = icons[id];
  return <IconComponent className={styles.icon} />;
};

export const BottomNavigation = ({
  selected,
  onSelect,
}: BottomNavigationProps) => {
  const [internalSelected, setInternalSelected] = useState<MenuItem | null>(
    selected ?? null,
  );

  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'pill', label: '내약통' },
    { id: 'consultation', label: '상담' },
    { id: 'mypage', label: '마이페이지' },
  ] as const;

  const handleClick = (id: MenuItem) => {
    setInternalSelected(id);
    onSelect?.(id);
  };

  return (
    <nav className={styles.bottomNav}>
      {menuItems.map(({ id, label }) => (
        <button
          key={id}
          className={cx(
            styles.menuItem,
            internalSelected === id && styles.active,
          )}
          onClick={() => handleClick(id)}
        >
          {renderIcon(id, internalSelected === id)}
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </nav>
  );
};
