
import Button from '@/components/ui/Button/button';
import classes from './result-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  console.log('====================================');
  console.log(date);
  console.log('====================================');
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
