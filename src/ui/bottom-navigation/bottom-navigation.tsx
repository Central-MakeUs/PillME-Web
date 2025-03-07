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

export type MenuItem = 'home' | 'pillbox' | 'consultation' | 'mypage';

interface BottomNavigationProps {
  selected: MenuItem;
  onSelect?: (id: MenuItem) => void;
}

const renderIcon = (id: MenuItem, isActive: boolean) => {
  const icons = {
    home: isActive ? MyHomeActive : MyHome,
    pillbox: isActive ? MyPillActive : MyPill,
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
  const menuItems = [
    { id: 'home', label: '홈' },
    { id: 'pillbox', label: '내약통' },
    // { id: 'consultation', label: '상담' },
    { id: 'mypage', label: '마이페이지' },
  ] as const;

  const handleClick = (id: MenuItem) => {
    onSelect?.(id);
  };

  return (
    <nav className={styles.bottomNav}>
      {menuItems.map(({ id, label }) => (
        <button
          key={id}
          className={cx(styles.menuItem, selected === id && styles.active)}
          onClick={() => handleClick(id)}
        >
          {renderIcon(id, selected === id)}
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </nav>
  );
};
