import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogImage,
    DialogSubtitle,
    DialogClose,
    DialogDescription,
    DialogContainer,
  } from '@/components/core/dialog';
  import { PlusIcon } from 'lucide-react';
  
  export function DialogBasicOne({ title, subtitle, imageSrc, description1, description2, projectLink} ) {
    return (
      <Dialog
        transition={{
          type: 'spring',
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <DialogTrigger
          style={{
            borderRadius: '12px',
          }}
          className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-300 bg-zinc-100 text-zinc-900'
        >
          <DialogImage
            src={imageSrc}
            alt={`An image of ${title}`}
            className="h-48 w-full object-cover"
          />
          <div className='flex flex-grow flex-row items-end justify-between p-2'>
            <div>
              <DialogTitle className='text-zinc-900'>
                {title}
              </DialogTitle>
              <DialogSubtitle className='text-zinc-700'>
                {subtitle}
              </DialogSubtitle>
            </div>
            <button
              type='button'
              className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-300 text-zinc-700 transition-colors hover:bg-zinc-200 hover:text-zinc-900 focus-visible:ring-2 active:scale-[0.98] focus-visible:ring-zinc-500'
              aria-label='Open dialog'
            >
              <PlusIcon size={12} />
            </button>
          </div>
        </DialogTrigger>
        <DialogContainer>
          <DialogContent
            style={{
              borderRadius: '24px',
            }}
            className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-300 bg-zinc-100 text-zinc-900 sm:w-[500px]'
          >
          <DialogImage
            src={imageSrc}
            alt={`An image of ${title}`}
            className="h-full w-full"
          />
            <div className='p-6'>
              <DialogTitle className='text-2xl text-zinc-900'>
                {title}
              </DialogTitle>
              <DialogSubtitle className='text-zinc-700'>
                {subtitle}
              </DialogSubtitle>
              <DialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className='mt-2 text-zinc-700'>
                  {description1}
                </p>
                <p className='text-zinc-700'>
                  {description2}
                </p>
                <a
                  className='mt-2 inline-flex text-zinc-500 underline'
                  href={projectLink}

                  rel='noopener noreferrer'
                >
                  Project Link
                </a>
              </DialogDescription>
            </div>
            <DialogClose className='text-blue-700' />
          </DialogContent>
        </DialogContainer>
      </Dialog>
    );
  }
  