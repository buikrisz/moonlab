'use client';

type CookieSettingsButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export const CookieSettingsButton = ({ className, children }: CookieSettingsButtonProps) => {
  const handleOpenSettings = () => {
    window.dispatchEvent(new Event('moonlab:open-cookie-settings'));
  };

  return (
    <button type="button" className={className} onClick={handleOpenSettings}>
      {children ?? 'Süti beállítások'}
    </button>
  );
};
