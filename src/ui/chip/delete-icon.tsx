type Props = {
  color?: string;
};

export const DeleteIcon = ({ color = '#4E5C71' }: Props) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_223_5308)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.95608 8.66743C9.84831 8.56334 9.70397 8.50574 9.55414 8.50704C9.40431 8.50834 9.26099 8.56844 9.15504 8.67439C9.0491 8.78033 8.989 8.92366 8.9877 9.07348C8.9864 9.22331 9.04399 9.36765 9.14808 9.47543L12.1727 12.5L9.14808 15.5246C9.09351 15.5773 9.04997 15.6403 9.02003 15.7101C8.99008 15.7798 8.97431 15.8548 8.97365 15.9306C8.973 16.0065 8.98745 16.0817 9.01619 16.152C9.04492 16.2222 9.08735 16.286 9.141 16.3397C9.19465 16.3933 9.25845 16.4357 9.32868 16.4645C9.39891 16.4932 9.47415 16.5077 9.55003 16.507C9.6259 16.5063 9.70088 16.4906 9.7706 16.4606C9.84032 16.4307 9.90337 16.3871 9.95608 16.3326L12.9807 13.308L16.0052 16.3326C16.113 16.4367 16.2573 16.4943 16.4072 16.493C16.557 16.4917 16.7003 16.4316 16.8063 16.3256C16.9122 16.2197 16.9723 16.0763 16.9736 15.9265C16.9749 15.7767 16.9173 15.6323 16.8132 15.5246L13.7887 12.5L16.8132 9.47543C16.9173 9.36765 16.9749 9.22331 16.9736 9.07348C16.9723 8.92366 16.9122 8.78033 16.8063 8.67439C16.7003 8.56844 16.557 8.50834 16.4072 8.50704C16.2573 8.50574 16.113 8.56334 16.0052 8.66743L12.9807 11.692L9.95608 8.66743Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_223_5308">
          <rect
            width="8"
            height="8"
            fill="white"
            transform="translate(8.98047 8.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
