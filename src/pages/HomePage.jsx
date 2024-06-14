import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadAddAction from '../components/Thread/CreateThreadAction';
import CategoryList from '../components/Category/CategoryList';
import ThreadList from '../components/Thread/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToggleDownVoteThread, asyncToggleUpVoteThread } from '../states/thread/action';

const HomePage = () => {
  const {
    threads = [], users = [], category: selectedCategory = '', authUser,
  } = useSelector((states) => states);
  const [status, setStatus] = useState('none');
  const [category, setCategory] = useState(selectedCategory);
  const [previousCategory, setPreviousCategory] = useState('');

  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const filterAllCategory = (threads) => {
    const categories = new Set(threads.map((thread) => thread.category));
    return Array.from(categories);
  };

  const onCategoryHandler = (newCategory) => {
    if (newCategory === previousCategory) {
      setCategory('');
    } else {
      setCategory(newCategory);
    }
    setPreviousCategory(newCategory);
  };

  const categoryList = filterAllCategory(threads);

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    if (status === 'none') {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('upVote');
      return;
    }

    if (status === 'upVote') {
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('none');
      return;
    }

    if (status === 'downVote') {
      dispatch(asyncToggleUpVoteThread(id));
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('upVote');
    }
  };

  const onDownVote = (id) => {
    if (status === 'none') {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('downVote');
      return;
    }

    if (status === 'downVote') {
      dispatch(asyncToggleDownVoteThread(id));
      setStatus('none');
      return;
    }

    if (status === 'upVote') {
      dispatch(asyncToggleDownVoteThread(id));
      dispatch(asyncToggleUpVoteThread(id));
      setStatus('downVote');
    }
  };

  const filteredThreads = threads.filter(
    (thread) => thread.category === category || category === '',
  );

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page mx-48">
      <div className="container mx-auto p-4">
        <CategoryList
          categories={categoryList}
          onCategoryClick={onCategoryHandler}
        />
        <ThreadList threads={threadList} upVote={onUpVote} downVote={onDownVote} />
        <ThreadAddAction />
      </div>
    </section>
  );
};

export default HomePage;
