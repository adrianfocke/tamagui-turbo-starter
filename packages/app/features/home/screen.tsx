import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@bbook/ui';
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Platform } from 'react-native';

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      gap="$8"
      padding="$4"
      background="$background"
    >
      <XStack
        position="absolute"
        width="100%"
        top="$6"
        gap="$6"
        justifyContent="center"
        flexWrap="wrap"
        $sm={{ position: 'relative', top: 0 }}
      >
        {Platform.OS === 'web' && <></>}
      </XStack>

      <YStack gap="$4">
        <H1 textAlign="center" color="$color12">
          Welcome to Tamagui.
        </H1>
        <Paragraph color="$color10" textAlign="center">
          Here's a basic starter to show navigating from one screen to another.
        </Paragraph>
        <Separator />
        <Paragraph textAlign="center">
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <Separator />
      </YStack>

      <SheetDemo />
    </YStack>
  );
}

function SheetDemo() {
  const toast = useToastController();

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay
          background="$shadow4"
          animation="lazy"
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Sheet.Handle bg="$color8" />
        <Sheet.Frame
          alignItems="center"
          justifyContent="center"
          gap="$10"
          background="$color2"
        >
          <XStack gap="$2">
            <Paragraph textAlign="center">Made by</Paragraph>
            <Anchor
              color="$blue10"
              href="https://twitter.com/natebirdman"
              target="_blank"
            >
              @natebirdman,
            </Anchor>
            <Anchor
              color="$blue10"
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              give it a ⭐️
            </Anchor>
          </XStack>

          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false);
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              });
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
