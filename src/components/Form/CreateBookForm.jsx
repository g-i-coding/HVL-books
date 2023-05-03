import { useState } from 'react';
import { Grid, Button, TextField } from '@mui/material';
import axios from 'axios';

export const CreateBookForm = ({ setBooks }) => {
  const [BookData, setBookData] = useState({
    title: '',
    author: '',
    releaseYear: '',
    bookRating: '',
    runTime: '',
    writers: ['', '', ''],
    actors: ['', '', ''],
    imageURL: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(BookData);
    await axios.post(
      `${process.env.REACT_APP_GATEWAY_URI}/${process.env.REACT_APP_GATEWAY_RESOURCE}`,
      BookData
    );
    setBooks((Books) => [...Books, BookData]);
    handleClear();
  };

  const handleClear = (e) => {
    e?.preventDefault();
    setBookData({
      title: '',
      author: '',
      bookRating: '',
      imageURL: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'light-gray' }}>
      <Grid container justifyContent='center'>
        <Grid item>
          <h2>Create a Book!</h2>
        </Grid>
      </Grid>
      <Grid
        container
        gap={'15px'}
        sx={{ margin: '20px 0px' }}
        justifyContent={'space-between'}
      >
        <Grid item xs={6}>
          <TextField
            size='small'
            label='Book Title'
            variant='filled'
            fullWidth
            value={BookData.title}
            onChange={(e) =>
              setBookData({ ...BookData, title: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            size='small'
            label='Book uthor'
            variant='filled'
            fullWidth
            value={BookData.author}
            onChange={(e) =>
              setBookData({ ...BookData, author: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Grid container gap={'15px'} sx={{ margin: '20px 0px' }}>
        {/* <Grid item>
          <TextField
            size='small'
            label='Release Year'
            variant='filled'
            value={BookData.releaseYear}
            onChange={(e) =>
              setBookData({ ...BookData, releaseYear: e.target.value })
            }
          />
        </Grid> */}
        {/* <Grid item>
          <TextField
            size='small'
            label='Run Time'
            variant='filled'
            value={BookData.runTime}
            onChange={(e) =>
              setBookData({ ...BookData, runTime: e.target.value })
            }
          />
        </Grid>*/}
        <Grid item>
          <TextField
            size='small'
            label='Content Rating'
            variant='filled'
            value={BookData.bookRating}
            onChange={(e) =>
              setBookData({ ...BookData, bookRating: e.target.value })
            }
          />
        </Grid>
      </Grid>
      {/* <Grid container gap={'15px'} sx={{ margin: '20px 0px' }}>
        <Grid item>
          <TextField
            size='small'
            label='Actor 1'
            variant='filled'
            value={BookData.actors[0]}
            onChange={(e) => {
              const arr = BookData.actors;
              arr[0] = e.target.value;
              setBookData({ ...BookData, actors: arr });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            size='small'
            label='Actor 2'
            variant='filled'
            value={BookData.actors[1]}
            onChange={(e) => {
              const arr = BookData.actors;
              arr[1] = e.target.value;
              setBookData({ ...BookData, actors: arr });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            size='small'
            label='Actor 3'
            variant='filled'
            value={BookData.actors[2]}
            onChange={(e) => {
              const arr = BookData.actors;
              arr[2] = e.target.value;
              setBookData({ ...BookData, actors: arr });
            }}
          />
        </Grid>
      </Grid> */}
      {/* <Grid container gap={'15px'} sx={{ margin: '20px 0px' }}>
        <Grid item>
          <TextField
            size='small'
            label='Writer 1'
            variant='filled'
            value={BookData.writers[0]}
            onChange={(e) => {
              const arr = BookData.writers;
              arr[0] = e.target.value;
              setBookData({ ...BookData, writers: arr });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            size='small'
            label='Writer 2'
            variant='filled'
            value={BookData.writers[1]}
            onChange={(e) => {
              const arr = BookData.writers;
              arr[1] = e.target.value;
              setBookData({ ...BookData, writers: arr });
            }}
          />
        </Grid>
        <Grid item>
          <TextField
            size='small'
            label='Writer 3'
            variant='filled'
            value={BookData.writers[2]}
            onChange={(e) => {
              const arr = BookData.writers;
              arr[2] = e.target.value;
              setBookData({ ...BookData, writers: arr });
            }}
          />
        </Grid>
      </Grid> */}
      <Grid container gap={'15px'} sx={{ margin: '20px 0px' }}>
        <Grid item xs={12}>
          <TextField
            size='small'
            label='Image URL'
            variant='filled'
            fullWidth
            value={BookData.imageURL}
            onChange={(e) =>
              setBookData({ ...BookData, imageURL: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Grid container gap={'15px'} sx={{ margin: '20px 0px' }}>
        <Grid item xs={12}>
          <TextField
            size='small'
            label='Description'
            variant='filled'
            fullWidth
            value={BookData.description}
            onChange={(e) =>
              setBookData({ ...BookData, description: e.target.value })
            }
          />
        </Grid>
      </Grid>
      <Grid container justifyContent='space-between'>
        <Grid item xs={4}>
          <Button
            variant='outlined'
            type='button'
            onClick={handleClear}
            fullWidth
          >
            Clear
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant='outlined' type='submit' fullWidth>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
