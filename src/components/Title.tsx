const Title = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold transform-all hover:border-b">{title}</h1>
    </div>
  );
};

export default Title;