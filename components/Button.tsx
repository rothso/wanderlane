type Props = {
  label: string;
};

export const Button: React.FC<Props> = ({ label }) => (
  <div className="border-2 border-dashed border-white/10 rounded-lg p-3 text-center">
    <p className="font-light opacity-50">{label}</p>
  </div>
);
