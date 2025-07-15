const HappyAlert = ({title, content, type = 'success'}) => {
    const getAlertStyles = () => {
        switch(type) {
            case 'success':
                return {
                    background: 'bg-gradient-to-r from-yellow-400 to-orange-500',
                    border: 'border-yellow-300',
                    animation: 'animate-bounce',
                    leftIcon: '🎉',
                    rightIcon: '🏆'
                };
            case 'error':
                return {
                    background: 'bg-gradient-to-r from-red-500 to-red-600',
                    border: 'border-red-400',
                    animation: 'animate-pulse',
                    leftIcon: '💥',
                    rightIcon: '😞'
                };
            case 'warning':
                return {
                    background: 'bg-gradient-to-r from-orange-500 to-red-500',
                    border: 'border-orange-400',
                    animation: 'animate-bounce',
                    leftIcon: '⚠️',
                    rightIcon: '🔥'
                };
            default:
                return {
                    background: 'bg-gradient-to-r from-blue-500 to-blue-600',
                    border: 'border-blue-400',
                    animation: 'animate-pulse',
                    leftIcon: 'ℹ️',
                    rightIcon: '📢'
                };
        }
    };

    const styles = getAlertStyles();

    return (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10 animate-slide-in">
            <div className={`${styles.background} px-8 py-4 rounded-lg shadow-2xl border-2 ${styles.border} ${styles.animation}`}>
                <div className="flex items-center gap-3 text-white">
                    <span className="text-2xl">{styles.leftIcon}</span>
                    <div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-sm opacity-90">{content}</p>
                    </div>
                    <span className="text-2xl">{styles.rightIcon}</span>
                </div>
            </div>
        </div>
    );
}
 
export default HappyAlert;