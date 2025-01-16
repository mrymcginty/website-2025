const Chip = ({ skill }: { skill: string }) => (
  <div className="inline-block rounded-xl bg-green mr-0.5 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm">
    {skill}
  </div>
);

export default Chip;
