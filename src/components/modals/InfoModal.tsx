import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play Friedle" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This list of names consist of 5 letter names from the following families: 
        <b> Friedmann, Buckley, Marquardt, Taylor, Roberts, Givens, Reyes, Kroll-Smith</b>
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the name in 4 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the name.
      </p>     

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="A" />
        <Cell value="M" />
        <Cell value="E" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is in the name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="A" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell value="S" />
        <Cell value="Y" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter I is in the name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="M" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is not in the name in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
