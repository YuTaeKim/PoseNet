export const StorageGetToken = async () => {
  const defaultValue = {
    access: '',
    refresh: '',
  };
  try {
    const token = await localStorage.getItem('@token');
    return JSON.parse(token ? token : '');
  } catch (error) {
    // Error retrieving data
    return defaultValue;
  }
};

export const StorageSetToken = async (access: string, refresh: string) => {
  const data = {
    access: access,
    refresh: refresh,
  };
  console.log(JSON.stringify(data));
  await localStorage.setItem('@token', JSON.stringify(data));
  return true;
};

export const StorageClearToken = async () => {
  await localStorage.removeItem('@token');
};
