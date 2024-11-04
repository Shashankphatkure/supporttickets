export default function StatusBadge({ status, size = "default" }) {
  const getStatusStyles = () => {
    const baseStyles = {
      open: "bg-yellow-500/20 text-yellow-200 border-yellow-500/30",
      "in-progress": "bg-blue-500/20 text-blue-200 border-blue-500/30",
      resolved: "bg-green-500/20 text-green-200 border-green-500/30",
      closed: "bg-gray-500/20 text-gray-200 border-gray-500/30",
      urgent: "bg-red-500/20 text-red-200 border-red-500/30",
    };

    const sizeStyles = {
      small: "px-2 py-0.5 text-xs",
      default: "px-3 py-1 text-sm",
      large: "px-4 py-1.5 text-base",
    };

    return `${baseStyles[status] || baseStyles.closed} ${sizeStyles[size]} 
      rounded-full border font-medium inline-flex items-center gap-1.5`;
  };

  return (
    <span className={getStatusStyles()}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
    </span>
  );
}
