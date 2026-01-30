import { useState } from "react"
import { Button, Modal, StyleSheet, Text, View } from "react-native"

export const ButtonGlobal = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <View style={styles.Button}>
        <Button title="Open" onPress={() => setOpen(true)} />
      </View>
      <Modal visible={open} onDismiss={() => setOpen(false)}>
        <View style={styles.container}>
          <Text>Modal</Text>
        </View>
        <View style={styles.Button}>
          <Button title="Close" onPress={() => setOpen(false)} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    margin: 10,
  }
})