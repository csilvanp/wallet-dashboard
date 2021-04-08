const formatTagColor = ((frequency: string, theme: string) => {
  if (theme === 'dark') {
    if (frequency === 'recorrente') {
      return '#4E41F0';
    } else {
      return '#E44C4E'
    }
  } else {
    if (frequency === 'recorrente') {
      return '#03BB85';
    } else {
      return '#FF6961';
    }
  }
})

export default formatTagColor;