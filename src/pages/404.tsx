export function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        <button onClick={goBack} className="text-sky-600 dark:text-sky-400">
          Voltar
        </button>
      </p>
    </div>
  );
}
