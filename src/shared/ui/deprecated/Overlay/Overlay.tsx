import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

/**
 * Устарел, использовать компоненты из папки redesigned
 @deprecated
 */
export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;

    return (
        <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} />
    );
});
